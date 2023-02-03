// String 으로 변환되는데 있어 일부 값 유실 이슈가 있을 수 있으므로 유의
interface BigInt {
    toJSON: () => string;
}

BigInt.prototype["toJSON"] = function() { return this.toString() }

