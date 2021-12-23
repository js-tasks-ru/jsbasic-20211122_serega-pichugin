function makeFriendsList(friends) {

  let ul = document.createElement('UL');
  
  ul.innerHTML += friends.map(item => `<li>${item.firstName} ${item.lastName}</li>`).join('');

  return ul;
  
}