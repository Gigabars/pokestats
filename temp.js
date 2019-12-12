if (type2out == "normal")
{
 fighting += 1;
 ghost += NaN;
}
else if (type2out == "fire")
{
fire += -1;
water += 1;
grass += -1;
ice += -1;
ground += 1;
bug += -1;
rock += 1;
steel += -1;
fairy += -1;
}
else if (type2out == 'water')
{
fire += -1;
water += -1;
electric += 1;
grass += 1;
ice += -1;
steel += -1;
}
else if (type2out == "electric")
{
electric += -1;
ground += 1;
flying += -1;
steel += -1;
}
else if (type2out == "grass")
{
fire += 1;
water += -1;
electric += -1;
grass += -1;
ice += 1;
poison += 1;
ground += -1;
flying += 1;
bug += 1;
}
else if (type2out == "ice")
{
fire += 1;
ice += -1;
fighting += 1;
rock += 1;
steel += 1;
}
else if (type2out == "fighting")
{
flying += 1;
psychic += 1;
bug += -1;
rock += -1;
dark += -1;
fairy += 1;
}
else if (type2out == "poison")
{
grass += -1;
fighting += -1;
poison += -1;
ground += 1;
psychic += 1;
bug += 1;
fairy += -1;
}
else if (type2out == "ground")
{
    water += 1;
    electric += NaN;
    grass += 1;
    ice += 1;
    poison += -1;
    rock += -1;
}
else if (type2out == "flying")
{
    electric += 1;
    grass += -1;
    ice += 1;
    fighting += -1;
    ground += NaN;
    bug += -1;
    rock += 1;
}
else if (type2out == "psychic")
{
    fighting += -1;
    psychic += -1;
    bug += 1;
    ghost += 1;
    dark += 1;
}
else if (type2out == "bug")
{
    fire += 1;
    grass += -1;
    fighting += -1;
    ground += -1;
    flying += 1;
    rock += 1;
}
else if (type2out == "rock")
{
    normal += -1;
    fire += -1;
    water += 1;
    grass += 1;
    fighting += 1;
    poison += -1;
    ground += 1;
    flying += -1;
    steel += 1;
}
else if (type2out == "ghost")
{
    normal += NaN;
    fighting += NaN;
    poison += -1;
    bug += -1;
    ghost += 1;
    dark += 1;
}
else if (type2out == "dragon")
{
    fire += -1;
    water += -1;
    electric += -1;
    grass += -1;
    ice += -1;
    dragon += 1;
    fairy += 1;
}
else if (type2out == "dark")
{
    fighting += 1;
    psychic += NaN;
    bug += 1;
    ghost += -1;
    dark += -1;
    fairy += 1;
}
else if (type2out == "steel")
{
    normal += -1;
    fire += 1;
    grass += -1;
    ice += -1;
    fighting += 1;
    poison += NaN;
    ground += 1;
    flying += -1;
    psychic += -1;
    bug += -1;
    rock += -1;
    dragon += -1;
    steel += -1;
    fairy += -1;
}
else if (type2out == "fairy")
{
    fighting += -1;
    poison += 1;
    bug += -1;
    dragon += NaN;
    dark += -1;
    steel += 1;
}