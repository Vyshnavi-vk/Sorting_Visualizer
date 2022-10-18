

function Merge() {

    // Setting time and space complexities
    const time_worst = document.getElementById("Time_Worst");
    time_worst.innerText = "O(N log N)";
    time_worst.style.fontSize = '13px';

    const time_average = document.getElementById("Time_Average");
    time_average.innerText = "Θ(N log N)";
    time_average.style.fontSize = '13px';

    const time_best = document.getElementById("Time_Best");
    time_best.innerText = "Ω(N log N)";
    time_best.style.fontSize = '13px';

    const space_worst = document.getElementById("Space_Worst");
    space_worst.innerText = "O(N)";
    space_worst.style.fontSize = '13px';

    c_delay = 0;

    merge_partition(0, array_size-1);

    enable_buttons();

}

// Merge sort algorithm

function merge_sort(start, mid, end) {
    var p = start, q = mid+1;
    var Arr = [], k = 0;

    for(var i = start; i <= end; i++) {
        if(p > mid) {
            Arr[k++] = div_sizes[q++];
            div_update(divs[q-1], div_sizes[q-1], "red");
        }

        else if(q > end) {
            Arr[k++] = div_sizes[p++];
            div_update(divs[p-1], div_sizes[p-1], "red");
        }

        else if(div_sizes[p] < div_sizes[q]) {
            Arr[k++] = div_sizes[p++];
            div_update(divs[p-1], div_sizes[p-1], "red");
        }



        else {
            Arr[k++] = div_sizes[q++];
            div_update(divs[q-1], div_sizes[q-1], "red");
        }
    }

    for(var t = 0; t < k; t++) {
        div_sizes[start++] = Arr[t];
        div_update(divs[start-1], div_sizes[start-1], "green");
    }
}



function merge_partition(start, end) {
    if(start < end) {
        var mid = Math.floor((start + end) / 2);
        div_update(divs[mid], div_sizes[mid], "yellow");

        merge_partition(start, mid);
        merge_partition(mid+1, end);

        merge_sort(start, mid, end);
    }
}