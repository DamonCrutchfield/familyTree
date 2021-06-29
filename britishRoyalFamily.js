let britishRoyalFamily = {
    name: "Henry Williams Jr.",
      parents: [{
      name: "Henry Williams Sr.",
        parents: [{
        name: "Charles Williams",
        parents: ["Mason Williams", "Eleanor Williams"],
        childOf: function () {
      return this.parents.map(parent => parent.name).join(' & ') || "unknown"
    }
      }, {
      name: "Maisie Williams",
      parents: ["Sawyer Wilmington", "Avery Wilmington"],
      childOf: function () {
      return this.parents.map(parent => parent.name).join(' & ') || "unknown"
    }
      }],
      childOf: function () {
      return this.parents.map(parent => parent.name).join(' & ') || "unknown"
    }
      }, {
      name: "Elizabeth Williams",
      parents: [{
      name: "George Masterson",
      parents: ["Greyson Masterson", "Willow Masterson"],
      childOf: function () {
      return this.parents.map(parent => parent.name).join(' & ') || "unknown"
    }
      }, {
      name: "Sophia Masterson",
      parents: ["Blake Benson", "Audrey Benson"],
      childOf: function () {
      return this.parents.map(parent => parent.name).join(' & ') || "unknown"
    }
      }],
      childOf: function () {
      return this.parents.map(parent => parent.name).join(' & ') || "unknown"
    }
      }],
    childOf: function () {
      return this.parents.map(parent => parent.name).join(' & ') || "unknown"
    }
  }
