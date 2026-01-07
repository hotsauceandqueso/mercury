self.__uv$config = {
    prefix: '/service/',
    bare: 'https://your-vps-domain.com/bare/', // Your VPS bare server
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
};
