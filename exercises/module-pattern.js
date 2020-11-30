// Module Pattern

const MyModule = (() => {
  const key = '1234'
  
  const PublicApi = {
    getKey: () => `My key ` + key  
  }
  
  return PublicApi
  
})()

const moduleCopy = MyModule

moduleCopy.getKey()
