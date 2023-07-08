"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispensadorModule = void 0;
const common_1 = require("@nestjs/common");
const dispensador_service_1 = require("./dispensador.service");
const dispensador_controller_1 = require("./dispensador.controller");
const typeorm_1 = require("@nestjs/typeorm");
const dispensador_entity_1 = require("./entities/dispensador.entity");
let DispensadorModule = class DispensadorModule {
};
DispensadorModule = __decorate([
    (0, common_1.Module)({
        controllers: [dispensador_controller_1.DispensadorController],
        providers: [dispensador_service_1.DispensadorService],
        imports: [typeorm_1.TypeOrmModule.forFeature([
                dispensador_entity_1.Dispensador
            ])]
    })
], DispensadorModule);
exports.DispensadorModule = DispensadorModule;
//# sourceMappingURL=dispensador.module.js.map