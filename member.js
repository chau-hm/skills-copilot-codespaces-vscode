function skillsMember() {
  return {
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    getSkills: function() {
      return this.skills;
    },
    addSkill: function(skill) {
      this.skills.push(skill);
      return this.skills;
    }
  };
}