var cliff = require('./cliff')
var ord = require('ord')
var straight = require('./straight')

function fraction(denominator) {
  return ( '1/' + denominator.toString() + ord(denominator)) }

function ordinal(number) {
  return ( number.toString() + ord(number) ) }

function vesting(monthlyFraction, cliffFraction, cliffYears){ 
  if (cliffFraction && cliffYears === undefined) {
    cliffYears = 1 }
  if (cliffFraction) {
    return {
      form: cliff,
      blanks: {
        "cliff fraction": fraction(cliffFraction),
        "cliff anniversary": ordinal(cliffYears),
        "monthly fraction": fraction(monthlyFraction) } } }
  else {
    return {
      form: straight,
      blanks: {
        "monthly fraction": fraction(monthlyFraction) } } } }

module.exports = vesting
