const planetData = [
    {
      category: 'inhabited',
      content: 'Foxes',
      asteroid: true
    },
    {
      category: 'inhabited',
      content: 'Whales and Rabbits',
      asteroid: true
    },
    {
      category: 'uninhabited',
      content: 'Baobabs and Roses',
      asteroid: true
    },
    {
      category: 'inhabited',
      content: 'Giant monsters',
      asteroid: false
    },
    {
      category: 'inhabited',
      content: 'Sheep',
      asteroid: true
    }
  ]

document.querySelector('ul').removeChild(document.querySelector('li'));

planetData.forEach(function(element) {
    if (Object.values(element)[2]) {
        let box = document.createElement('li')
        box.textContent = Object.values(element)[1]
        document.querySelector('ul').appendChild(box)
    }
});
