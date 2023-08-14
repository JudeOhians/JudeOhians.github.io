// Create person objects  
const jude = {
    name: "Adinoyi Jude Ohiani",
    age: "30",
    hobbies: ["farming", "music", "coding", "hangout"],
    state: "Kogi",
    relationship: "Single",
    zodiacSign: "Taurus",
    sibling: "7",
    country: "Nigeria",
    programmingLanguages: ["JavaScript", "HTML", "Python"],
    shoeSize: "45",
    shirtSize: "extra large"
  };
  
  const oshoThomas = {
    name: 'James Osho Thomas',
    age: '30',
    hobbies: ['football', 'games', 'coding'],
    state: 'Edo',
    relationship: 'Single',
    zodiacSign: 'Taurus',
    sibling: '2',
    country: 'Nigeria',
    programmingLanguages: ['PHP', 'JavaScript', 'HTML', 'Python'],
    shoeSize: '43',
    shirtSize: 'large'
  };
  
  // Function to find similarities
  function findSimilarities(personA, personB) {
    const similarities = [];
  
    for (const attribute in personA) {
      if (personA.hasOwnProperty(attribute) && personB.hasOwnProperty(attribute)) {
        if (Array.isArray(personA[attribute])) {
          // Compare arrays
          const commonValues = personA[attribute].filter(value => personB[attribute].includes(value));
          if (commonValues.length > 0) {
            similarities.push(attribute);
          }
        } else {
          // Compare other attributes
          if (personA[attribute] === personB[attribute]) {
            similarities.push(attribute);
          }
        }
      }
    }
  
    return similarities;
  }
  
  // Find and display similarities
  const similarities = findSimilarities(jude, oshoThomas);
  
  if (similarities.length > 0) {
    console.log(`Similarities found in: ${similarities.join(", ")}`);
  } else {
    console.log("No similarities found.");
  }
  