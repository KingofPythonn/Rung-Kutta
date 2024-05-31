

const button = document.getElementById("button")
button.addEventListener("click", (event) => {
    event.preventDefault();
    let x0 = parseFloat(document.getElementById("first").value);
    let y0 = parseFloat(document.getElementById("second").value);
    let x = parseFloat(document.getElementById("third").value);
    let h = parseFloat(document.getElementById("fourth").value);
    document.getElementById("result").innerHTML = rungeKutta(x0,y0,x,h) ;  
});

 function dydx(x, y)
 {
    return((x - y) / 2);
 }
 
// Finds value of y for a given x using step size h
// and initial value y0 at x0.
 function rungeKutta(x0, y0, x, h)
 {
    
   

    // Count number of iterations using 
    // step size or step height h
    let n = parseInt((x - x0) / h, 10);
 
    let k1, k2, k3, k4, k5;
 
    // Iterate for number of iterations
    let y = y0;
    for(let i = 1; i <= n; i++)
    {
         
        // Apply Runge Kutta Formulas to find
        // next value of y
        k1 = h * dydx(x0, y);
        k2 = h * dydx(x0 + 0.5 * h, y + 0.5 * k1);
        k3 = h * dydx(x0 + 0.5 * h, y + 0.5 * k2);
        k4 = h * dydx(x0 + h, y + k3);
 
        // Update next value of y
        y = y + (1 / 6) * (k1 + 2 * k2 + 
                            2 * k3 + k4);;
 
        // Update next value of x
        x0 = x0 + h;
    }
    return y.toFixed(6);
    
 }
 
    

