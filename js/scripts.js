/*$(document).ready(function () {
  $("#formOne").submit(function (event) {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput = $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});*/

$(document).ready(function () {
  $("#formOne").submit(function (event) {
    const noun = $("input#noun").val();
    const pluralNoun = $("input#pluralNoun").val();
    const presentTenseVerb = $("input#presentTenseVerb").val();
    const anotherPresentTenseVerb = $("input#anotherPresentTenseVerb").val();
    const partOfBodyPlural = $("input#partOfBodyPlural").val();
    const adj = $("input#adjective").val();
    const anotherPluralNoun = $("input#anotherPluralNoun").val();
    const anotherAdjective = $("input#anotherAdjective").val();

    $(".noun").text(noun);
    $(".pluralNoun").text(pluralNoun);
    $(".presentTenseVerb").text(presentTenseVerb);
    $(".anotherPresentTenseVerb").text(anotherPresentTenseVerb);
    $(".partOfBodyPlural").text(partOfBodyPlural);
    $(".adjective").text(adj);
    $(".anotherPluralNoun").text(anotherPluralNoun);
    $(".anotherAdjective").text(anotherAdjective);

    $("#story").show();

    event.preventDefault();
  });
});