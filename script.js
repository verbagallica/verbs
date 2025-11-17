const vokale = ["a", "e", "i", "o", "u", "é", "è", "ê", "h"];
const pronoms = {je: ["me ", "m'"], tu: ["te ", "t'"], il: ["se ", "s'"], nous: ["nous ", "nous "], vous: ["vous ", "vous "], ils: ["se ", "s'"]};

function getVerbForm(verb, temp, person) {
    return verbs[verb]?.forms?.[temp]?.[person] || "Form not found";
}

function present(verb, person) {
    return getVerbForm(verb, "present", person);
}

function passe_compose(verb, person) {
    var hilfsverb = verbs[verb]?.info.hilfsverb;
    var hilfsverbKonjugiert = getVerbForm(hilfsverb, "present", person);
    var participePasse = verbs[verb]?.info.participe_passe;

    if ((person == "nous" || person == "vous" || person == "ils") && hilfsverb == "être") {
        participePasse = participePasse + "s";
    }
    if (verb.startsWith("se_")) {
        if (vokale.includes(hilfsverbKonjugiert[0])) {
            var pronom = pronoms[person][1];
        } else {
            var pronom = pronoms[person][0];
        }
        hilfsverbKonjugiert = pronom + hilfsverbKonjugiert;
    }

    return hilfsverbKonjugiert + " " + participePasse;
}

function imparfait(verb, person) {
    return getVerbForm(verb, "imparfait", person);
}

function plus_que_parfait(verb, person) {
    var hilfsverb = verbs[verb]?.info.hilfsverb;
    var hilfsverbKonjugiert = getVerbForm(hilfsverb, "imparfait", person);
    var participePasse = verbs[verb]?.info.participe_passe;

    if ((person == "nous" || person == "vous" || person == "ils") && hilfsverb == "être") {
        participePasse = participePasse + "s";
    }
    if (verb.startsWith("se_")) {
        if (vokale.includes(hilfsverbKonjugiert[0])) {
            var pronom = pronoms[person][1];
        } else {
            var pronom = pronoms[person][0];
        }
        hilfsverbKonjugiert = pronom + hilfsverbKonjugiert;
    }

    return hilfsverbKonjugiert + " " + participePasse;
}

function conditionnel_present(verb, person) {
    return getVerbForm(verb, "conditionnel", person);
}

function conditionnel_passe(verb, person) {
    var hilfsverb = verbs[verb]?.info.hilfsverb;
    var hilfsverbKonjugiert = getVerbForm(hilfsverb, "conditionnel", person);
    var participePasse = verbs[verb]?.info.participe_passe;

    if ((person == "nous" || person == "vous" || person == "ils") && hilfsverb == "être") {
        participePasse = participePasse + "s";
    }
    if (verb.startsWith("se_")) {
        if (vokale.includes(hilfsverbKonjugiert[0])) {
            var pronom = pronoms[person][1];
        } else {
            var pronom = pronoms[person][0];
        }
        hilfsverbKonjugiert = pronom + hilfsverbKonjugiert;
    }

    return hilfsverbKonjugiert + " " + participePasse;
}

function futur_simple(verb, person) {
    return getVerbForm(verb, "futur_simple", person);
}

function futur_proche(verb, person) {
    var aller = getVerbForm("aller", "present", person);
    if (verb.startsWith("se_")) {
        verb = verb.slice(3);
        if (vokale.includes(verb[0])) {
            var pronom = pronoms[person][1];
        } else {
            var pronom = pronoms[person][0];
        }
        verb = pronom + verb
    }
    return aller + " " + verb;
}

function futur_anterieur(verb, person) {
    var hilfsverb = verbs[verb]?.info.hilfsverb;
    var hilfsverbKonjugiert = getVerbForm(hilfsverb, "futur_simple", person);
    var participePasse = verbs[verb]?.info.participe_passe;

    if ((person == "nous" || person == "vous" || person == "ils") && hilfsverb == "être") {
        participePasse = participePasse + "s";
    }
    if (verb.startsWith("se_")) {
        if (vokale.includes(hilfsverbKonjugiert[0])) {
            var pronom = pronoms[person][1];
        } else {
            var pronom = pronoms[person][0];
        }
        hilfsverbKonjugiert = pronom + hilfsverbKonjugiert;
    }

    return hilfsverbKonjugiert + " " + participePasse;
}

function imperatif(verb, person) {
    return getVerbForm(verb, "imperatif", person);
}

function subjonctif(verb, person) {
    return getVerbForm(verb, "subjonctif", person);
}

function passe_recent(verb, person) {
    var venir = getVerbForm("venir", "present", person);

    if (verb.startsWith("se_")) {
        verb = verb.slice(3);
        if (vokale.includes(verb[0])) {
            var pronom = pronoms[person][1];
        } else {
            var pronom = pronoms[person][0];
        }
        verb = pronom + verb
    }

    if (vokale.includes(verb[0])) {
        return venir + " d'" + verb;
    } else {
        return venir + " de " + verb;
    }
}

function getTemp(verb, temp, person) {
    var verb = temp(verb, person);

    if (person == "je" && (vokale.includes(verb.charAt(0)) || verb.charAt(0) == "h")) {
        person = "j'";
    } else {
        person = person + " "
    }

    return person + verb;
}