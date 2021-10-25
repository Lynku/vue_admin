const store = {
  get(key){
    return JSON.parse(localStorage.getItem(key)) || []  
  },
  set(key, val){
    localStorage.setItem(key, JSON.stringify(val));
  },
  del(key){
    localStorage.removeItem(key);  
  },
  clean(){
    localStorage.clear();
  },
  is(){
    return !!localStorage.getItem('token');
  }
};

export default store;
