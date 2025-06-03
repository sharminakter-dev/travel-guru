import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/slice/authSlice';
import { useNavigate } from 'react-router';

const AuthState = () => {
  const dispatch = useDispatch();
  const user = useSelector(state=>state.auth.user);
  const auth = getAuth();
  const navigate = useNavigate()

  // get currently signed-in user
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) { 
          dispatch(setUser({
              uid : user.uid,
              userName : user.displayName,
              email : user.email,
              success : true
          }))
          navigate('/')
      } else {
            dispatch(setUser({
              uid: '',
              userName: '',
              email: '',
              success: false
          }));
      }
    });
    return ()=>unsubscribe();
  }, [dispatch, auth]);



    return null;
};

export default AuthState;