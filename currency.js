
class dov{
    constructor(first,second){
        this.first=first;
        this.second=second;
        this.amount=null; 
        this.url="http://api.exchangeratesapi.io/v1/latest";
    }
    change(){
        return new Promise((resolve,reject) =>{
            fetch(this.url+"?access_key=5d5e213d8ed0013adf5fb7e7a4902dcd&base="+this.first+"&symbols="+this.second)
            .then(response=>response.json())
            .then(response2=>response2.rates)
            .then(response3=>{
                const parite=response3[this.second];
                const amount2=Number(this.amount);
                let total=parite*amount2;
                resolve(total);
            })
            .catch(error=>reject(error));
   
        })
    }
    changeamount(amount){
        this.amount=amount;
    }
    changeFirst(newFirst){
        this.first=newFirst;
    }
    changeSecond(newSecond){
        this.second=newSecond;
    }

}