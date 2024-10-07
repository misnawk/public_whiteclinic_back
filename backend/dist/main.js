"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const setupSwagger_1 = require("./util/setupSwagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = 8000;
    app.enableCors({ origin: true, credentials: true });
    (0, setupSwagger_1.setupSwagger)(app);
    await app.listen(port);
    console.log(`Server is running on port:${port}!`);
}
bootstrap();
//# sourceMappingURL=main.js.map