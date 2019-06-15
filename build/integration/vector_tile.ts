import * as Long from 'long';
import { Writer, Reader } from 'protobufjs/minimal';


export interface Tile {
  layers: Tile_Layer[];
}

export enum Tile_GeomType {
  UNKNOWN = 0,
  POINT = 1,
  LINESTRING = 2,
  POLYGON = 3,
}

export interface Tile_Value {
  stringValue: string;
  floatValue: number;
  doubleValue: number;
  intValue: number;
  uintValue: number;
  sintValue: number;
  boolValue: boolean;
}

export interface Tile_Feature {
  id: number;
  tags: number[];
  type: Tile_GeomType;
  geometry: number[];
}

export interface Tile_Layer {
  version: number;
  name: string;
  features: Tile_Feature[];
  keys: string[];
  values: Tile_Value[];
  extent: number;
}

const baseTile: object = {
  layers: null,
};

const baseTile_Value: object = {
  stringValue: "",
  floatValue: 0,
  doubleValue: 0,
  intValue: 0,
  uintValue: 0,
  sintValue: 0,
  boolValue: false,
};

const baseTile_Feature: object = {
  id: 0,
  tags: 0,
  type: 0,
  geometry: 0,
};

const baseTile_Layer: object = {
  version: 0,
  name: "",
  features: null,
  keys: "",
  values: null,
  extent: 0,
};

function longToNumber(long: Long) {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

export const Tile = {
  encode(message: Tile, writer: Writer = Writer.create()): Writer {
    for (const v of message.layers) {
      Tile_Layer.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): Tile {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseTile) as Tile;
    message.layers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.layers.push(Tile_Layer.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Tile {
    const message = Object.create(baseTile) as Tile;
    message.layers = [];
    if (object.layers) {
      for (const e of object.layers) {
        message.layers.push(Tile_Layer.fromJSON(e));
      }
    }
    return message;
  },
  toJSON(message: Tile): unknown {
    const obj: any = {};
    obj.layers = message.layers;
    return obj;
  },
};

export namespace Tile_GeomType {
  export function fromJSON(object: any): Tile_GeomType {
    switch (object) {
      case 0:
      case "UNKNOWN":
        return Tile_GeomType.UNKNOWN;
      case 1:
      case "POINT":
        return Tile_GeomType.POINT;
      case 2:
      case "LINESTRING":
        return Tile_GeomType.LINESTRING;
      case 3:
      case "POLYGON":
        return Tile_GeomType.POLYGON;
      default:
        throw new Error(`Invalid value ${object}`);
    }
  }
}

export const Tile_Value = {
  encode(message: Tile_Value, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.stringValue);
    writer.uint32(21).float(message.floatValue);
    writer.uint32(25).double(message.doubleValue);
    writer.uint32(32).int64(message.intValue);
    writer.uint32(40).uint64(message.uintValue);
    writer.uint32(48).sint64(message.sintValue);
    writer.uint32(56).bool(message.boolValue);
    return writer;
  },
  decode(reader: Reader, length?: number): Tile_Value {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseTile_Value) as Tile_Value;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stringValue = reader.string();
          break;
        case 2:
          message.floatValue = reader.float();
          break;
        case 3:
          message.doubleValue = reader.double();
          break;
        case 4:
          message.intValue = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.uintValue = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.sintValue = longToNumber(reader.sint64() as Long);
          break;
        case 7:
          message.boolValue = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Tile_Value {
    const message = Object.create(baseTile_Value) as Tile_Value;
    if (object.stringValue) {
      message.stringValue = String(object.stringValue);
    }
    if (object.floatValue) {
      message.floatValue = Number(object.floatValue);
    }
    if (object.doubleValue) {
      message.doubleValue = Number(object.doubleValue);
    }
    if (object.intValue) {
      message.intValue = Number(object.intValue);
    }
    if (object.uintValue) {
      message.uintValue = Number(object.uintValue);
    }
    if (object.sintValue) {
      message.sintValue = Number(object.sintValue);
    }
    if (object.boolValue) {
      message.boolValue = Boolean(object.boolValue);
    }
    return message;
  },
  toJSON(message: Tile_Value): unknown {
    const obj: any = {};
    obj.stringValue = message.stringValue;
    obj.floatValue = message.floatValue;
    obj.doubleValue = message.doubleValue;
    obj.intValue = message.intValue;
    obj.uintValue = message.uintValue;
    obj.sintValue = message.sintValue;
    obj.boolValue = message.boolValue;
    return obj;
  },
};

export const Tile_Feature = {
  encode(message: Tile_Feature, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.id);
    writer.uint32(18).fork();
    for (const v of message.tags) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(24).int32(message.type);
    writer.uint32(34).fork();
    for (const v of message.geometry) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(reader: Reader, length?: number): Tile_Feature {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseTile_Feature) as Tile_Feature;
    message.tags = [];
    message.geometry = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tags.push(reader.uint32());
            }
          } else {
            message.tags.push(reader.uint32());
          }
          break;
        case 3:
          message.type = reader.int32();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.geometry.push(reader.uint32());
            }
          } else {
            message.geometry.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Tile_Feature {
    const message = Object.create(baseTile_Feature) as Tile_Feature;
    message.tags = [];
    message.geometry = [];
    if (object.id) {
      message.id = Number(object.id);
    }
    if (object.tags) {
      for (const e of object.tags) {
        message.tags.push(Number(e));
      }
    }
    if (object.type) {
      message.type = Tile_GeomType.fromJSON(object.type);
    }
    if (object.geometry) {
      for (const e of object.geometry) {
        message.geometry.push(Number(e));
      }
    }
    return message;
  },
  toJSON(message: Tile_Feature): unknown {
    const obj: any = {};
    obj.id = message.id;
    obj.tags = message.tags;
    obj.type = message.type;
    obj.geometry = message.geometry;
    return obj;
  },
};

export const Tile_Layer = {
  encode(message: Tile_Layer, writer: Writer = Writer.create()): Writer {
    writer.uint32(120).uint32(message.version);
    writer.uint32(10).string(message.name);
    for (const v of message.features) {
      Tile_Feature.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.keys) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.values) {
      Tile_Value.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(40).uint32(message.extent);
    return writer;
  },
  decode(reader: Reader, length?: number): Tile_Layer {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseTile_Layer) as Tile_Layer;
    message.features = [];
    message.keys = [];
    message.values = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 15:
          message.version = reader.uint32();
          break;
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.features.push(Tile_Feature.decode(reader, reader.uint32()));
          break;
        case 3:
          message.keys.push(reader.string());
          break;
        case 4:
          message.values.push(Tile_Value.decode(reader, reader.uint32()));
          break;
        case 5:
          message.extent = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Tile_Layer {
    const message = Object.create(baseTile_Layer) as Tile_Layer;
    message.features = [];
    message.keys = [];
    message.values = [];
    if (object.version) {
      message.version = Number(object.version);
    }
    if (object.name) {
      message.name = String(object.name);
    }
    if (object.features) {
      for (const e of object.features) {
        message.features.push(Tile_Feature.fromJSON(e));
      }
    }
    if (object.keys) {
      for (const e of object.keys) {
        message.keys.push(String(e));
      }
    }
    if (object.values) {
      for (const e of object.values) {
        message.values.push(Tile_Value.fromJSON(e));
      }
    }
    if (object.extent) {
      message.extent = Number(object.extent);
    }
    return message;
  },
  toJSON(message: Tile_Layer): unknown {
    const obj: any = {};
    obj.version = message.version;
    obj.name = message.name;
    obj.features = message.features;
    obj.keys = message.keys;
    obj.values = message.values;
    obj.extent = message.extent;
    return obj;
  },
};
