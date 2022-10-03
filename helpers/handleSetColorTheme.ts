export const handleSetColorTheme = (darkTheme:boolean) => {
    if(typeof(darkTheme)=='boolean'){
        
        if(darkTheme){
            document.querySelector('html')?.classList.remove('dark');
        }else{
            document.querySelector('html')?.classList.add('dark')
        }
        
        return;
      
    }
      
    return 'Debe ingresar un valor y que sea de tipo booleano';
    
      
    
  }