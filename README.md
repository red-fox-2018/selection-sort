# selection-sort
FUNCTION selectionSort parameter ARRAY

  LOOP index i = 0, index i kurang dari panjang ARRAY, increment satu
    SET MIN sama dengan index i

    LOOP index j = index i + 1, index j kurang dari panjang ARRAY, increment satu
      IF ARRAY index j kurang dari ARRAY index MIN
        MIN sama dengan j
      END IF
    END LOOP
    
  SET FIRST sama dengan ARRAY index i
  SWAP ARRAY index i sama dengan ARRAY index MIN
  SWAP ARRAY index MIN sama dengan FIRST
  END LOOP
  RETURN ARRAY
END FUNCTION
