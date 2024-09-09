export type Personn = {
    firstName: string
    lastName: string
    age: number
    visits: number
    status: string
    progress: number
  }
  
 export const defaultData: Personn[] = [
    {
      firstName: 'Ram',
      lastName: 'linsley',
      age: 24,
      visits: 100,
      status: 'In Relationship',
      progress: 50,
    },
    {
      firstName: 'tandy',
      lastName: 'miller',
      age: 40,
      visits: 40,
      status: 'Single',
      progress: 80,
    },
    {
      firstName: 'joe',
      lastName: 'dirte',
      age: 45,
      visits: 20,
      status: 'Complicated',
      progress: 10,
    },
  ]





  type Person = {
    firstName: string;
    lastName: string;
    age: number;
  };


  export const data: Person[] = [
    { firstName: 'John', 
        lastName: 'Doe', 
        age: 28 
    },
    { 
        firstName: 'Jane',
         lastName: 'Smith', 
         age: 22
         },
  ];
  