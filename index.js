// Code your solution here:
function driversWithRevenueOver(collection, revenue) {
  const highEarners = collection.filter(driver => driver['revenue'] > revenue);
  return highEarners
}

function driverNamesWithRevenueOver(collection, revenue) {
  const namedHighEarners = driversWithRevenueOver(collection, revenue).map(driver => driver.name);
  return namedHighEarners
}

function exactMatch(collection, obj) {
  const key = Object.keys(obj)[0];
  const sameObject = collection.filter(driver => driver[key] === obj[key]);
  return sameObject
}

function exactMatchToList(collection, obj) {
  const nameList = exactMatch(collection, obj).map(driver => driver.name);
  return nameList
}
