const state = {
  items: [
    { id: 'bolt', name: 'Bolt', image: '/images/Bolt.png', checked: false },
    { id: 'plank', name: 'Plank', image: '/images/Plank.png', checked: false },
    { id: 'duct_tape', name: 'Duct Tape', image: '/images/Duct_Tape.png', checked: false },

    { id: 'nail', name: 'Nail', image: '/images/Nail.png', checked: false },
    { id: 'screw', name: 'Screw', image: '/images/Screw.png', checked: false },
    { id: 'wood_panel', name: 'Wood Panel', image: '/images/Wood_Panel.png', checked: false },

    { id: 'land_deed', name: 'Land Deed', image: '/images/Land_Deed.png', checked: false },
    { id: 'mallet', name: 'Mallet', image: '/images/Mallet.png', checked: false },
    { id: 'marker_stake', name: 'Marker Stake', image: '/images/Marker_Stake.png', checked: false },
  ]
}

const getters = {
  allItems: state => state.items,
  checkedItems: state => state.items.filter(item => item.checked)
}

const actions = {
  updateItemCheckedState ({ commit }, item) {
    commit('updateItem', item)
  }
}

// mutations
const mutations = {
  updateItem (state, item) {
    state.items = state.items.map(stateItem => stateItem.id === item.id ? item : stateItem)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
