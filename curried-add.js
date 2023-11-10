function curriedAdd(add){
  if(!add) return 0;
  function adder(num){
    if(!num) return add;
    add += num;
    return adder;
  };
  return adder;
};



  



module.exports = { curriedAdd };
