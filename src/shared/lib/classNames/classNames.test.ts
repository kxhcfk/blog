import { classNames } from './classNames';

describe('classNames', () => {
    test('one class of string type', () => {
        expect(classNames('testClass')).toBe('testClass');
    });

    test('two class of string type', () => {
        expect(classNames('testClass', 'twoTestClass')).toBe('testClass twoTestClass');
    });

    test('with boolean type', () => {
        const isActive = false;

        expect(classNames('testClass', isActive && 'twoTestClass')).toBe('testClass');
    });

    test('with null type', () => {
        expect(classNames('testClass', null)).toBe('testClass');
    });

    test('with undefined type', () => {
        expect(classNames('testClass', undefined)).toBe('testClass');
    });

    test('with true type', () => {
        expect(classNames('testClass', true)).toBe('testClass');
    });
});
