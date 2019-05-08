
function bubbleSort(data)
{
    output("Unsorted...<br/>");
    printData(data, data.length);

    output("Bubble Sorting...<br/>");

    let last_index = data.length - 2;
    let index;

    while(last_index >= 0)
    {
        for(index = 0; index <= last_index; index++)
        {
            if(data[index] > data[index+1])
            {
                data[index] = data[index] ^ data[index+1];
                data[index+1] = data[index] ^ data[index+1];
                data[index] = data[index] ^ data[index+1];
            }
        }

        printData(data, last_index);

        last_index--;
    }

    output("Sorted!<br/>");
}


function printData(data, sorted_to)
{
    let n;

    for(let i = 0; i < data.length; i++)
    {
        n = String(data[i]).padStart(4, " ").replace(/ /g, "&nbsp;");

        if(i > sorted_to)
            output("<span class='greenbg'>" + n + "</span> ");
        else
            output("<span class='redbg'>" + n + "</span> ");
    }

    output("<br/><br/>");
}
