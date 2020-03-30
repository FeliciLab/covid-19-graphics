const colors = ['#3498DB', '#fab822', '#fb397a', '#5d78ff', '#f0b800', '#1fbb87', '#ea2c59', '#0088ff', '#e06100', '#00b771', '#bbbbe3', '#e02b20', '#74a7a9', '#ec9051', '#0193d8', '#78be41', '#b83430', '#418e88', '#659ee3'
]

const sortByQuantity = (data) => {
  return data.sort((a, b) => {
    if (a.quantidade > b.quantidade) {
      return 1
    }
    if (a.quantidade < b.quantidade) {
      return -1
    }
    return 0
  })
}

const filterByDate = (data, item) => {
  return data.filter(i => {
    // eslint-disable-next-line eqeqeq
    if (item.data == i.data) {
      return i
    }
  })
}

export {
  colors,
  sortByQuantity,
  filterByDate
}
