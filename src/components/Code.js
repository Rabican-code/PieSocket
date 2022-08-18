     render() {
        var htmlString = '<p> i am html string </p>';
        
        function functionizer() {
          return Math.random();
        }
        
        var functionString = '' + functionizer
        
        return (
          <div> 
            {htmlString}
            {functionString}
          </div>
        )
      }
    }
