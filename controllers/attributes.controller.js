export default function attributesController(Abilities) {
  function get(req, res) {
    const query = {};
    Abilities.find(query, null)
      .exec((err, attributes) => {
        if (err) {
          return res.send(err);
        }
        return res.json(attributes);
      });
  }

  return { get };
}
