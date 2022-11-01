export const handleSetColorTheme = (darkTheme:boolean) => {
    if(typeof(darkTheme)=='boolean'){

        if(darkTheme){
            document.querySelector('html')?.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }else{
            document.querySelector('html')?.classList.remove('dark')
            localStorage.setItem('theme', 'light');
        }
        return;
      
    }
      
    return 'Debe ingresar un valor y que sea de tipo booleano';
    
      
    
  }