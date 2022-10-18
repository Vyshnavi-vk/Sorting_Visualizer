


function Bubble()
{
    //Setting Time complexities
    const time_worst = document.getElementById("Time_Worst");
    time_worst.innerText="O(N^2)";
    time_worst.style.fontSize = '13px';

    const time_average = document.getElementById("Time_Average");
    time_average.innerText="Θ(N^2)";
    time_average.style.fontSize = '13px';

    const time_best = document.getElementById("Time_Best");
    time_best.innerText="Ω(N)";
    time_best.style.fontSize = '13px';

    //Setting Space complexity
    const space_worst = document.getElementById("Space_Worst");
    space_worst.innerText="O(1)";
    space_worst.style.fontSize = '13px';



    c_delay=0;

    //Bubble sort algorithm
    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "red");//Color update
                div_update(divs[j+1],div_sizes[j+1], "red");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "red");//Height update
                div_update(divs[j+1],div_sizes[j+1], "red");//Height update
            }
            div_update(divs[j],div_sizes[j], "blue");//Color update
        }
        div_update(divs[j],div_sizes[j], "green");//Color update
    }
    div_update(divs[0],div_sizes[0], "green");//Color update//for last iteration

    enable_buttons();
}
