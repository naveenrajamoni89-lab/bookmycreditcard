export function checkEligibility(age, income) {
  const ageNum = Number(age);
  const incomeNum = Number(income);
  if (!age || !income || !Number.isInteger(ageNum) || ageNum < 0 || !Number.isFinite(incomeNum) || incomeNum < 0) {
    return { error: 'Enter a valid age and monthly income to check.' };
  }
  if (ageNum < 18) return { eligible: false, message: 'You are below the usual minimum age for a credit card.' };
  if (ageNum > 65) return { eligible: false, message: 'Some issuers may have a maximum age requirement. Check the card’s current terms.' };
  if (incomeNum < 15000) return { eligible: false, message: 'Your income may be below the requirement for some unsecured cards. An FD-backed card may be an option.' };
  if (incomeNum < 50000) return { eligible: true, message: 'You may meet the basic age and income criteria for some entry-level cards.' };
  return { eligible: true, message: 'You may meet the basic age and income criteria for a wider range of cards.' };
}
