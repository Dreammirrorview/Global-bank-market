let wallets={A001:{name:'Student A',balance:50000},B001:{name:'Student B',balance:20000}};
let transactions=[];
function transfer(sender,receiver,amount){
 amount=Number(amount);
 if(!wallets[sender]||!wallets[receiver]) return alert('Invalid wallet');
 if(wallets[sender].balance<amount) return alert('Insufficient balance');
 let ref='TXN-'+Date.now();
 wallets[sender].balance-=amount;
 wallets[receiver].balance+=amount;
 transactions.push({ref,from:sender,to:receiver,amount,date:new Date().toLocaleString()});
 alert('Transfer Successful\nRef: '+ref);
}
function showBalances(){ console.table(wallets); }