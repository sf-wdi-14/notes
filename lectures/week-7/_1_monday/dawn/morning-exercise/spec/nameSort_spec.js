describe("People", function() {

  var peeps = new People(["jill", "jack"]);

  describe("name get", function() {
    it("returns all the peoples' names", function() {
      expect(peeps.getNames()).toEqual(["Jill", "Jack"]);
    });
  });

  describe("sort", function() {
    it("sorts the names of Jack & Jill", function() {
      peeps.sort();
      expect(peeps.getNames()).not.toEqual(["Jill", "Jack"]);
      expect(peeps.getNames()).toEqual(["Jack", "Jill"]);
    });
    it("sorts the names of more than two people", function() {
      peeps = new People(["Zoe", "Chloe", "Joey", "Bill"]);
      peeps.sort();
      expect(peeps.getNames()).toEqual(["Bill", "Chloe", "Joey", "Zoe"]);
    });
  });

});