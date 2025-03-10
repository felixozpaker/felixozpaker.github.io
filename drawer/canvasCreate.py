
for i in range(100):
    print('<canvas onmouseover="draw(' + str(i) +  ')" class="canvas" id="canvas_' + 
    str(i) + '" onmousedown="initialDraw(' + str(i) + ')"></canvas>')

    #print('<canvas class="canvas" id="canvas_' + 
    #str(i) + '" onmouseover="draw(' + str(i) + ')"></canvas>')

    #print('<canvas class="canvas" id="canvas_' + 
    #str(i) + '"></canvas>')