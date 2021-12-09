function showSalary(users, age) {
  return users    
    .map(user => (user.age <= age) ? `${user.name}, ${user.balance}` : '')
    .filter(function(user) { return user.trim() != ''; })
    .join('\n')
}
