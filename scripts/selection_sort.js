


function Selection(){

    // Setting time and space complexities
    const time_worst = document.getElementById("Time_Worst");
    time_worst.innerText = "O(N^2)";
    time_worst.style.fontSize = '13px';

    const time_average = document.getElementById("Time_Average");
    time_average.innerText = "Θ(N^2)";
    time_average.style.fontSize = '13px';

    const time_best = document.getElementById("Time_Best");
    time_best.innerText = "Ω(N^2)";
    time_best.style.fontSize = '13px';


    const space_worst = document.getElementById("Space_Worst");
    space_worst.innerText = "O(1)";
    space_worst.style.fontSize = '13px';



    c_delay = 0;

    // Selection sort algorithm
    for(var i = 0; i < array_size-1; i++) {
        div_update(divs[i], div_sizes[i], "red");

        index_min = i;

        for(var j = i+1; j < array_size; j++) {
            div_update(divs[j], div_sizes[j], "yellow");

            if(div_sizes[j] < div_sizes[index_min]) {
                if(index_min != 1) {
                    div_update(divs[index_min], div_sizes[index_min], "blue");
                }
                index_min = j;
                div_update(divs[index_min], div_sizes[index_min], "red");
            }
            else{
                div_update(divs[j], div_sizes[j], "blue");
            }
        }

        if(index_min != i) {
            var temp = div_sizes[index_min];
            div_sizes[index_min] = div_sizes[i];
            div_sizes[i] = temp;

            div_update(divs[index_min], div_sizes[index_min], "red");
            div_update(divs[i], div_sizes[i], "red");
            div_update(divs[index_min], div_sizes[index_min], "blue");
        }

        div_update(divs[i], div_sizes[i], "green");
    }

    div_update(divs[i], div_sizes[i], "green");

    enable_buttons();
}