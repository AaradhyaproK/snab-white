import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

export function useCollection(collectionName, fallbackData = [], sortField = null, sortDirection = 'asc') {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const q = collection(db, collectionName);

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        let items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        
        if (items.length > 0) {
          if (sortField) {
            items.sort((a, b) => {
              const valA = a[sortField];
              const valB = b[sortField];
              
              if (valA === undefined || valA === null) return 1;
              if (valB === undefined || valB === null) return -1;
              
              if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
              if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
              return 0;
            });
          }
          setData(items);
        } else {
          setData(fallbackData);
        }
        setError(null);
        setLoading(false);
      },
      (err) => {
        console.warn(`Firestore read on "${collectionName}" failed. Using local fallback:`, err);
        setError(err);
        setData(fallbackData);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [collectionName, sortField, sortDirection]);

  return { data, loading, error };
}
