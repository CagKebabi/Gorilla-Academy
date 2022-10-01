import React from 'react'
import db from "../firebase"
import { doc, getDoc } from "firebase/firestore";
import { useEffect,useContext } from 'react'
import CategoryContentIndexeContext from '../context/categroycontentindexcontext';


function CategoryArrays () {
  const {html,setHtml} = useContext(CategoryContentIndexeContext);
  const {css,setCss} = useContext(CategoryContentIndexeContext);
  const {javascript,setJavascript} = useContext(CategoryContentIndexeContext);
  const {react,setReact} = useContext(CategoryContentIndexeContext);
  const {vue,setVue} = useContext(CategoryContentIndexeContext);
  const {cplus,setCplus} = useContext(CategoryContentIndexeContext);
  const {csharp,setCsharp} = useContext(CategoryContentIndexeContext);
  const {kotlin,setKotlin} = useContext(CategoryContentIndexeContext);
  const {swift,setSwift} = useContext(CategoryContentIndexeContext);
  const {sass,setSass} = useContext(CategoryContentIndexeContext);
  const {bootstrap,setBootstrap} = useContext(CategoryContentIndexeContext);
  const {firebase,setFirebase} = useContext(CategoryContentIndexeContext);

  const fetchAll0 = (e) => {
    e && e.preventDefault();
    db.collection('html')
    .get()
    .then((snapshot) => {
        if(snapshot.docs.length>0){
            snapshot.docs.forEach((doc) => {
                setHtml((prev) => {
                    return [...prev,doc.data().icerikbasligi];
                });
            });
        };
    });
    // console.log(denemes)
};

useEffect(fetchAll0,[db]);


const fetchAll1 = (e) => {
    e && e.preventDefault();
    db.collection('css')
    .get()
    .then((snapshot) => {
        if(snapshot.docs.length>0){
            snapshot.docs.forEach((doc) => {
                setCss((prev) => {
                    return [...prev,doc.data().icerikbasligi];
                });
            });
        };
    });
    // console.log(denemes)
};

useEffect(fetchAll1,[db]);


const fetchAll2 = (e) => {
    e && e.preventDefault();
    db.collection('javascrıpt')
    .get()
    .then((snapshot) => {
        if(snapshot.docs.length>0){
            snapshot.docs.forEach((doc) => {
                setJavascript((prev) => {
                    return [...prev,doc.data().icerikbasligi];
                });
            });
        };
    });
    // console.log(denemes)
};

useEffect(fetchAll2,[db]);


const fetchAll3 = (e) => {
    e && e.preventDefault();
    db.collection('react')
    .get()
    .then((snapshot) => {
        if(snapshot.docs.length>0){
            snapshot.docs.forEach((doc) => {
                setReact((prev) => {
                    return [...prev,doc.data().icerikbasligi];
                });
            });
        };
    });
    // console.log(denemes)
};

useEffect(fetchAll3,[db]);


const fetchAll4 = (e) => {
    e && e.preventDefault();
    db.collection('vue')
    .get()
    .then((snapshot) => {
        if(snapshot.docs.length>0){
            snapshot.docs.forEach((doc) => {
                setVue((prev) => {
                    return [...prev,doc.data().icerikbasligi];
                });
            });
        };
    });
    // console.log(denemes)
};

useEffect(fetchAll4,[db]);


const fetchAll5 = (e) => {
    e && e.preventDefault();
    db.collection('cplus')
    .get()
    .then((snapshot) => {
        if(snapshot.docs.length>0){
            snapshot.docs.forEach((doc) => {
                setCplus((prev) => {
                    return [...prev,doc.data().icerikbasligi];
                });
            });
        };
    });
    // console.log(denemes)
};

useEffect(fetchAll5,[db]);


const fetchAll6 = (e) => {
    e && e.preventDefault();
    db.collection('csharp')
    .get()
    .then((snapshot) => {
        if(snapshot.docs.length>0){
            snapshot.docs.forEach((doc) => {
                setCsharp((prev) => {
                    return [...prev,doc.data().icerikbasligi];
                });
            });
        };
    });
    // console.log(denemes)
};

useEffect(fetchAll6,[db]);


const fetchAll7 = (e) => {
    e && e.preventDefault();
    db.collection('kotlin')
    .get()
    .then((snapshot) => {
        if(snapshot.docs.length>0){
            snapshot.docs.forEach((doc) => {
                setKotlin((prev) => {
                    return [...prev,doc.data().icerikbasligi];
                });
            });
        };
    });
    // console.log(denemes)
};

useEffect(fetchAll7,[db]);


const fetchAll8 = (e) => {
    e && e.preventDefault();
    db.collection('swift')
    .get()
    .then((snapshot) => {
        if(snapshot.docs.length>0){
            snapshot.docs.forEach((doc) => {
                setSwift((prev) => {
                    return [...prev,doc.data().icerikbasligi];
                });
            });
        };
    });
    // console.log(denemes)
};

useEffect(fetchAll8,[db]);


const fetchAll9 = (e) => {
    e && e.preventDefault();
    db.collection('sass')
    .get()
    .then((snapshot) => {
        if(snapshot.docs.length>0){
            snapshot.docs.forEach((doc) => {
                setSass((prev) => {
                    return [...prev,doc.data().icerikbasligi];
                });
            });
        };
    });
    // console.log(denemes)
};

useEffect(fetchAll9,[db]);


const fetchAll10 = (e) => {
    e && e.preventDefault();
    db.collection('bootstrap')
    .get()
    .then((snapshot) => {
        if(snapshot.docs.length>0){
            snapshot.docs.forEach((doc) => {
                setBootstrap((prev) => {
                    return [...prev,doc.data().icerikbasligi];
                });
            });
        };
    });
    // console.log(denemes)
};

useEffect(fetchAll10,[db]);


const fetchAll11 = (e) => {
    e && e.preventDefault();
    db.collection('firebase')
    .get()
    .then((snapshot) => {
        if(snapshot.docs.length>0){
            snapshot.docs.forEach((doc) => {
                setFirebase((prev) => {
                    return [...prev,doc.data().icerikbasligi];
                });
            });
        };
    });
    // console.log(denemes)
};

useEffect(fetchAll11,[db]);

    return (
        <>
        
        </>
    )
}

export default CategoryArrays