
///////////////////////////////////////
// Sets
// set is a collection of unique values. Set does not have any duplicates.
// Sets like arrays are iterables, but they dont have indexes and cannot be retrieved like array 
// alements for example like this array[1]
// Also values in Set does not have order

const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
  ]);
  console.log(ordersSet); //set is printed without duplicates
  // Set(3) { 'pasta', 'pica', 'risoto' }
  
  console.log(new Set('Rolandas'));
  // Set(7) { 'R', 'o', 'l', 'a', 'n', 'd', 's' }
  
  console.log(ordersSet.size);
  console.log(ordersSet.has('Pizza'));
  console.log(ordersSet.has('Bread'));
  ordersSet.add('Garlic Bread');
  ordersSet.add('Garlic Bread');
  ordersSet.delete('Risotto');
  // ordersSet.clear();
  console.log(ordersSet);
  
  for (const order of ordersSet) console.log(order);
  
  // Example
  const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
  const staffUnique = [...new Set(staff)];
  console.log(staffUnique);
  
  console.log(
    new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
  );
  
  console.log(new Set('jonasschmedtmann').size);
  