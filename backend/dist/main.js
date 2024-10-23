"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const setupSwagger_1 = require("./util/setupSwagger");
const HttpErrorFilter_1 = require("./util/HttpErrorFilter");
const dotenv_1 = require("dotenv");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    (0, dotenv_1.config)();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = 8000;
    app.enableCors({ origin: true, credentials: true });
    app.useGlobalFilters(new HttpErrorFilter_1.HttpErrorFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    (0, setupSwagger_1.setupSwagger)(app);
    await app.listen(port);
    console.log(`Server is running on port:${port}!`);
}
bootstrap();
//# sourceMappingURL=main.js.map