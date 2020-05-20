export const size = {
  mouse: "320px",
  rat: "375px",
  cat: "425px",
  dog: "768px",
  wolf: "1000px",
  lion: "1024px",
  rhino: "1440px",
}

export const breakpoints = {
  minMouse: `(min-width: ${size.mouse})`,
  minRat: `(min-width: ${size.rat})`,
  minCat: `(min-width: ${size.cat})`,
  minDog: `(min-width: ${size.dog})`,
  minWolf: `(min-width: ${size.wolf})`,
  minLion: `(min-width: ${size.lion})`,
  minRhino: `(min-width: ${size.rhino})`,
}

/* EKSEMPEL
    
      @media ${breakpoints.minLion} {
      flex-direction: row;
    }
  
    */
