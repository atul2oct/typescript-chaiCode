let subs: number | string = '1M'; // union  | no ya string koi bhi
 let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'; //iski value yeh 3 option k alawa hoi hi nhi sakti hai
//  apiRequestStatus = 'done' //error Type '"done"' is not assignable to type '"pending" | "success" | "error"'
apiRequestStatus = 'success';

// any -> avoid how much you can.
const orders = ['12','20','28','30'];
// both are same
// let currentOrder: any; //any 
// let currentOrder; //any 
let currentOrder: string | undefined;//undeinfe is edge case
for(let order of orders){
    if(order === '28'){
        currentOrder = order;
        break;
    }
}

// currentOrder = 42; //yeh any hai isliye koi bhi value aa gai but we want only string so currenOrder we type define to string
console.log(currentOrder)