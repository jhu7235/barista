export const initialMenuItems = {
  1: {
    name: 'Coffee',
    inStock: true,
    recipe: [
      {
        id: '1',
        count: 3,
      },
      {
        id: '3',
        count: 1,
      },
      {
        id: '4',
        count: 1,
      },
    ],
  },
  2: {
    name: 'Decaf Coffee',
    inStock: true,
    recipe: [
      {
        id: '2',
        count: 3,
      },
      {
        id: '3',
        count: 1,
      },
      {
        id: '4',
        count: 1,
      },
    ],
  },
  3: {
    name: 'Caffe Latte',
    inStock: true,
    recipe: [
      {
        id: 7,
        count: 2
      },
      {
        id: 5,
        count: 1
      },
    ],
  },
  4: {
    name: 'Caffe American',
    inStock: true,
    recipe: [
      {
        id: '7',
        count: 3
      },
    ],
  },
  5: {
    name: 'Caffe Mocha',
    inStock: true,
    recipe: [
      {
        id: '7',
        count: 1
      },
      {
        id: '8',
        count: 1
      },
      {
        id: '5',
        count: 1
      },
      {
        id: '9',
        count: 1
      },
    ],
  },
  6: {
    name: 'Cappuccino',
    inStock: true,
    recipe: [
      {
        id: '7',
        count: 2
      },
      {
        id: '5',
        count: 1
      },
      {
        id: '6',
        count: 1
      },
    ],
  },
};

export const initialInventories = {
  1: {
    name: 'Coffee',
    cost: 0.75,
    count: 10,
    menuItem: [1]
  },
  2: {
    name: 'Decaf Coffee',
    cost: 0.75,
    count: 10,
    menuItem: [2]

  },
  3: {
    name: 'Sugar',
    cost: 0.25,
    count: 10,
    menuItem: [1,2]

  },
  4: {
    name: 'Cream',
    cost: 0.25,
    count: 10,
    menuItem: [1,2],
  },
  5: {
    name: 'Steamed Milk',
    cost: 0.35,
    count: 10,
    menuItem: [3,5,6],
  },
  6: {
    name: 'Foamed Milk',
    cost: 0.35,
    count: 10,
    menuItem: [6],

  },
  7: {
    name: 'Expresso',
    cost: 1.1,
    count: 10,
    menuItem: [3,4,5,6],
  },
  8: {
    name: 'Cocoa',
    cost: 0.9,
    count: 10,
    menuItem: [5],
  },
  9: {
    name: 'Whipped Cream',
    cost: 1,
    count: 10,
    menuItem: [5],
  },
};

export const initialMessages = {
  1: {
    text: 'Invalid selection: ',
  },
  2: {
    text: 'Dispensing: ',
  },
  3: {
    text: 'Out of stock: ',
  },
  throw: null,
  append: null,
};
