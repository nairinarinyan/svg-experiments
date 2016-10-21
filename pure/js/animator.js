const animator = {
    amount: 1,
    draw(targetSVGGroups) {
        this.animID = requestAnimationFrame(this.draw.bind(this, targetSVGGroups));
        this.update(targetSVGGroups.slice(0,4), 'skew');
        this.update(targetSVGGroups.slice(4,8), 'rotate');
        this.update(targetSVGGroups.slice(8,12), 'translate');
        this.update(targetSVGGroups.slice(12,16), 'scale');
    },
    stop() {
        cancelAnimationFrame(this.animID);
    },
    update(items, type) {
        this.amount += 5;
        if (this.amount >= 360) this.amount = 0;

        items.forEach(item => {
            item.setAttribute('transform', this.transform(type, this.amount))
        });
    },
    transform(type, amount) {
        switch(type) {
            case 'rotate':
                return `rotate(${amount} 50 50)`
            case 'translate':
                return `translate(${amount})`
            case 'skew':
                return `skewX(${amount})`
            case 'scale':
                return `scale(${(amount + 5)/(amount + 20)})`
        }
    }
}
