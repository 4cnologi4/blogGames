/*const passport = require('passport');
const localPassport = require('passport-local');*/
import passport from 'passport';
import passportStrategy from 'passport-local';

import {Usuarios} from '../usuarios/modelo';
import {Request, Response, NextFunction} from 'express-serve-static-core';

