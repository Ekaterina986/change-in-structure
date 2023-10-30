const listLink = document.getElementsByClassName('has-tooltip');
for (let link of listLink){
    link.addEventListener( 'click', e => {
        e.preventDefault();
        const toolList = document.getElementsByClassName('tooltip');
        for (let tool of toolList){
            console.log(222, tool);
            tool.remove();
        }
        const linkEl = e.currentTarget;
        const linkPos = linkEl.getBoundingClientRect();
        titleText = linkEl.getAttribute('title');
        div = document.createElement('div');
        div.className = 'tooltip';
        div.innerHTML = titleText;
        div.classList.add('tooltip_active');
        const y = Math.round(linkPos.y) + 20;
        const x = Math.round(linkPos.x);
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        linkEl.after(div);
    })
}
