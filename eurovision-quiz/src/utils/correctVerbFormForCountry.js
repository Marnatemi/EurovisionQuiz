const correctVerbFormForCountry = (verb, country) => {
    
  const lastLetter = country.substring(country.length - 1)
  
  if(verb !== ""){
    if (lastLetter === "a" || 
        lastLetter === "o" ||
        lastLetter === "y"){
 
      verb = verb + lastLetter
    }
  }
  return verb  
}

export default correctVerbFormForCountry