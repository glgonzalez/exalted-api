export const abilitiesController = (Abilities) => {
  function get(req, res) {
    const query = {};
    Abilities.find(query, null)
      .exec((err, abilities) => {
        if (err) {
          return res.send(err);
        }
        return res.json(abilities);
      });
  }

  return { get };
};
