module.exports = {
  description: 'Generates an ember-data adapter.',

  availableOptions: [
    { name: 'base-class', type: String, default: 'application' }
  ],
  locals: function(options) {
    if (this.project) {
      console.log("`locals` called with a project");
    } else {
      console.log("`locals` called without a project");
    }
    return this.lookupBlueprint('adapter').locals(options);
  }
};
